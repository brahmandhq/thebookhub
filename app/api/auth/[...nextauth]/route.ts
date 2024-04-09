import {prisma }from "@/utils/prisma"
import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { authOption } from "@/utils/authOptions"


const handler = NextAuth(authOption)
export { handler as GET, handler as POST }