import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div className="flex flex-col pt-10">
      <section className="mt-10 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant={'outline'} className='bg-green-100 text-green-700'  >
            Split expenceses. Simplify life.
          </Badge>

          <h1 className="gradient-title mt-4 mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
            The smartest way to split expenceses with friends
          </h1>

          <p className="mx-auto p-2 max-w-[700px] text-gray-500 md:text-l/relaxed">
            Tracking shared expenses, split bills effortlessly, and settle up 
            quickly. never worry about who owes who again.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size={"lg"}
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href={"/dashboard"}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>

            <Button 
              variant={"outline"}
              asChild
              size={"lg"}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link href={"#how-it-works"}>
                How it works
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
          </div>
        </div>
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
            src="/hero.png"
            width={1280}
            height={720}
            alt="Banner"
            className="rounded-lg mx-auto"
            priority

            />
          </div>
        </div>
      </section>
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant={'outline'} className='bg-green-100 text-green-700'  >
            Features
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Everything you need to split expenceses
          </h2>
          <p className="mx-auto p-2 max-w-[700px] text-gray-500 md:text-l/relaxed">
            Our platform provides all the tools you need to handle shared
            expenseswith ease
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({title, Icon, bg, color, description},index)=>(
              <Card 
              key={index}
              className="flex flex-col items-center space-y-4 p-6 text-center"
              >
                <div className={`rounded-full p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`}/>
                </div>
                 <h3 className="text-xl font-bold">{title}</h3>
                 <p className="text-gray-500">{description}</p>
              </Card>            
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className=" py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant={'outline'} className='bg-green-100 text-green-700'  >
            How it works
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Splitting expenceses has never been easier
          </h2>
          <p className="mx-auto p-2 max-w-[700px] text-gray-500 md:text-l/relaxed">
            Follow these simple steps to start tracking and splitting expenceses
            with friends
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8  lg:grid-cols-3">
            {STEPS.map(({title,description, label},index)=>(
                <div 
              key={index}
                className="flex flex-col items-center space-y-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                      {label}
                  </div>
                   <h3 className="text-xl font-bold">{title}</h3>
                   <p className="text-gray-500">{description}</p>
                </div>
                
                       
            ))}
          </div>
        </div>
      </section>

      <section i className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant={'outline'} className='bg-green-100 text-green-700'  >
            Testimonials
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What our users are saying
          </h2>
          
          <div className="mx-auto mt-12 grid max-w-5xl gap-6  lg:grid-cols-3">
            {TESTIMONIALS.map(({quote, name, role, image},index)=>(
                      <Card key={index}>
                        <CardContent className={"space-y-4 p-6"}>
                          <p className="text-gray-500">
                            {quote}
                          </p>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={image} alt={name} />
                              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                            </Avatar>

                            <div className="text-left">
                              <p className="text-sm font-medium">{name}</p>
                              <p className="text-sm text-muted-foreground">{role}</p>
                            </div>
                          </div>
                        
                        </CardContent>
                     </Card>
                     
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
