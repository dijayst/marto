

   "use client";
import Script from "next/script";

export default function ChatraWidget() {
  return (
    <Script
      id="chatra-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(d, w, c) {
              w.ChatraID = '3mrDbWYMFC3Yxm7av';
              var s = d.createElement('script');
              w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
              };
              s.async = true;
               s.src = 'https://call.chatra.io/chatra.js';
              if (d.head) d.head.appendChild(s);
          })(document, window, 'Chatra');
        `,
      }}
    />
  );
}