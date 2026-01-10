"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";

export function Analytics() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "granted") {
      setConsent(true);
    } else if (stored === "denied") {
      setConsent(false);
    } else {
      setConsent(null);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "granted");
    setConsent(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "denied");
    setConsent(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Scripts load ONLY if consent is true */}
      {consent === true && (
        <>
          {/* Google Tag Manager */}
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T6L2GL9C');`,
            }}
          />
          
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-Z78F90SDYR"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-Z78F90SDYR');
              `,
            }}
          />

          {/* Apollo Tracker */}
          <Script
            id="apollo-tracker"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"6962dcb35184a80019de283f"})},
document.head.appendChild(o)}initApollo();`,
            }}
          />

          {/* Microsoft Clarity */}
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  (function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "use5g3p131");
                `,
            }}
          />
        </>
      )}

      {/* Banner shows if consent is NULL (not yet decided) */}
      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
            <Card className="max-w-4xl mx-auto p-6 bg-background/95 backdrop-blur-md border-primary/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative">
              <button 
                onClick={handleDecline}
                className="absolute top-1 left-1 p-0.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start gap-4 flex-1 pl-2 md:pl-0">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0 hidden md:block">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Enhance your experience</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pr-8 md:pr-0">
                    We use cookies to personalize content and analyze traffic to give you the best possible experience.
                  </p>
                </div>
              </div>
              <div className="flex items-center shrink-0 w-full md:w-auto justify-end">
                <Button onClick={handleAccept} className="flex-1 md:flex-none min-w-[100px]">
                  Allow
                </Button>
              </div>
            </Card>
        </div>
      )}
    </>
  );
}
