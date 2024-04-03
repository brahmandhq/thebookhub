import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {prisma }from "@/utils/prisma"

export const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt',
      },
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
      ],
      callbacks: {
        async signIn({ account, profile }) {
          if (!profile?.email) {
            throw new Error('No profile')
          }
    
          await prisma.user.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name!,
             
             picture : profile.picture
            },
            update: {
              name: profile.name!,
              picture : profile.picture
            },
          })
          return true
        },
        // session,
        async jwt({ token, user, account, profile }) {
          if (profile) {
            const user = await prisma.user.findUnique({
              where: {
                email: profile.email!,
              },
            })
            if (!user) {
              throw new Error('No user found')
            }
            token.id = user.id
          }
          return token
        },
      },
}
