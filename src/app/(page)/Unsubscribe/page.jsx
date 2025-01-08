"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Unsubscribe = () => {
  const router = useRouter();

  useEffect(() => {
    const handleUnsubscribe = async () => {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const token = urlSearchParams.get("token");

      if (!token) return;

      try {
        const response = await fetch(
          `/api/newsletter/unsubscribe?token=${token}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          setTimeout(() => {
            router.push("/");
          }, null);
        } else {
          console.error("Erreur lors du désabonnement");
        }
      } catch (error) {
        toast.error("Erreur réseau :", error);
      }
    };

    handleUnsubscribe();
  }, [router]);

  const handleSubmit = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-100 shadow-2xl rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 opacity-50" />

        <CardContent className="relative p-8 space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-red-50/50 rounded-full animate-bounce">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Désabonnement confirmé
            </h2>

            <p className="text-lg text-gray-600">
              Vous n'êtes plus abonné à la newsletter de Adventures.
            </p>

            <p className="text-sm text-gray-500">
              Redirection automatique dans quelques secondes...
            </p>
          </div>

          <div className="pt-4">
            <a href="/" className="block w-full no-underline">
              <Button
                onClick={handleSubmit}
                className="w-full group relative py-6 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-xl transition-all duration-300 ease-out hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg font-medium">
                  Retour à l'accueil
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unsubscribe;
