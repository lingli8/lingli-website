import type { Metadata } from "next";
import { Inter, Press_Start_2P, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Runs before React hydrates — prevents FOUT + sets up easter egg console hook.
const themeScript = `(function(){
  try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}
  try{
    console.log('%c\\n  lingli.dev  \\n\\nFound a secret! Type __discoverConsoleEgg() to unlock it.\\n','color:#E07856;font-family:monospace;font-size:13px;font-weight:bold;');
    window.__discoverConsoleEgg=function(){try{var f=JSON.parse(localStorage.getItem('easter-eggs-found')||'[]');var id='console-ascii-egg';if(f.indexOf(id)!==-1){console.log('%cAlready found this one! Keep exploring...','color:#E07856');return;}f.push(id);localStorage.setItem('easter-eggs-found',JSON.stringify(f));window.dispatchEvent(new CustomEvent('egg-discovered',{detail:{id:id,count:f.length}}));console.log('%cEaster egg found! ('+f.length+'/9) Check the footer!','color:#E07856;font-weight:bold');}catch(e){}};
  }catch(e){}
})();`;

export const metadata: Metadata = {
  title: content.meta.site.title,
  description: content.meta.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${pressStart2P.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="min-h-full bg-background text-foreground font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
