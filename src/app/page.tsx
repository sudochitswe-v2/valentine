"use client";

import { useState, useEffect, CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

const cuteTexts = [
  "Are you a magician? Because whenever I look at you, everyone else disappears!",
  "I'm not a photographer, but I can definitely picture us together.",
  "Do you believe in love at first sight, or should I walk by again?",
  "Aside from being gorgeous, what do you do for a living?",
  "I must be a snowflake, because I've fallen for you.",
  "Are you French? Because Eiffel for you.",
  "If you were a vegetable, you'd be a cute-cumber.",
  "If being sexy was a crime, you'd be guilty as charged.",
  "Was your father a thief? 'Cause someone stole the stars from the sky and put them in your eyes.",
  "You're so sweet, you're giving me a toothache."
];

const noButtonTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

export default function Home() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [noButtonStyle, setNoButtonStyle] = useState<CSSProperties>({ position: 'relative' });
  const [cuteText, setCuteText] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleYesClick = () => {
    const randomIndex = Math.floor(Math.random() * cuteTexts.length);
    setCuteText(cuteTexts[randomIndex]);
    setYesClicked(true);
  };

  const handleNoInteraction = () => {
    setNoCount((prev) => (prev + 1));
    setYesButtonScale((prev) => prev + 0.2);
    
    const newTop = `${Math.random() * 90}%`;
    const newLeft = `${Math.random() * 90}%`;

    setNoButtonStyle({
        position: 'absolute',
        top: newTop,
        left: newLeft,
        transition: "top 0.4s ease, left 0.4s ease",
    });
  };
  
  const getNoButtonText = () => {
    return noButtonTexts[noCount % noButtonTexts.length];
  }

  if (!isClient) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden relative bg-background">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-headline text-foreground/50 animate-pulse">
                    Will you be my Valentine?
                </h1>
            </div>
        </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden relative bg-background">
      {yesClicked ? (
        <Card className="max-w-md w-full text-center p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-500 bg-card/90 backdrop-blur-sm border-primary">
          <CardContent className="p-0">
            <h1 className="text-4xl md:text-5xl font-headline text-accent-foreground mb-4">I knew it!</h1>
            <div className="my-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://media.giphy.com/media/UMon0fuS3d2vi/giphy.gif"
                alt="Cute cats cuddling gif"
                width={480}
                height={480}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-lg md:text-xl font-body text-foreground/80 italic">
              "{cuteText}"
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-headline text-primary-foreground mb-12">
            Will you be my Valentine?
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handleYesClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-2xl rounded-full shadow-lg transition-all duration-300"
              style={{
                transform: `scale(${yesButtonScale})`,
                transformOrigin: 'center',
                padding: '1.5rem 2rem',
              }}
            >
              <Heart className="mr-2 fill-current" /> Yes
            </Button>
            <Button
              variant="destructive"
              onMouseEnter={handleNoInteraction}
              onClick={handleNoInteraction}
              style={noButtonStyle}
              className="px-6 py-4 text-xl rounded-full shadow-lg bg-primary hover:bg-primary/90"
            >
              {getNoButtonText()}
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
