import {Button} from "@/components/ui/button.tsx";
import {Play} from "lucide-react";
import {HeroVideoDialog} from "@/components/ui/hero-video-dialog.tsx";
import {useUser, SignInButton} from "@clerk/clerk-react";

function Hero() {
    const {user} = useUser()
    return (
        <div className='flex flex-col items-center justify-center mt-28 space-y-4'>
            <h2 className='font-bold text-5xl'>Create Stunning
                <span className='text-primary'>
                    {" "}
                    Presentations
                    {" "}
                </span>
                in Seconds with AI
            </h2>
            <p className='text-xl text-gray-500 max-w-2xl text-center'>
                Generate sleek editable PPT slides in minutes. AI handles the slide design, formatting, and visual
                content so you can focus on your message, impress your audience, and work smarter, and not harder.</p>
            <div className='flex gap-5 mt-10'>
                <Button variant='outline' size='lg'>
                    Watch Video
                    <Play/>
                </Button>

                {!user ?
                    <SignInButton mode='modal'>
                        <Button size='lg'>Get Started</Button>
                    </SignInButton> :
                    <Button size='lg'>Go to workspace</Button>
                }
            </div>

            <div className="relative max-w-3xl mt-14">
                <h2 className='text-center my-14'>Watch how to create AI PPT</h2>
                <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    );
}

export default Hero;