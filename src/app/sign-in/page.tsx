"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, LogIn, ArrowLeft } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
        callbackURL: "/admin",
      });

      if (error?.code) {
        toast.error("Invalid email or password. Please try again.");
        setIsLoading(false);
        return;
      }

      toast.success("Welcome back!");
      router.push("/admin");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-zinc-400 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Login Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-852845-vpag-logo.png?"
              alt="VPAG Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Admin <span className="text-primary">Sign In</span>
            </h1>
            <p className="text-zinc-400">
              Access your gallery management dashboard
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@vpag.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={isLoading}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="off"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                disabled={isLoading}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-primary"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
                className="w-4 h-4 text-primary bg-zinc-800 border-zinc-700 rounded focus:ring-primary focus:ring-2"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-zinc-400"
              >
                Remember me
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-black font-semibold h-12 text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-400 text-sm">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="text-primary hover:text-primary/80 font-semibold"
              >
                Create one here
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-zinc-500 text-sm mt-6">
          Secure admin access for VPAG team members only
        </p>
      </div>
    </div>
  );
}