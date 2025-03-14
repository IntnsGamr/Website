import Link from "next/link"
import { BookOpen, Bookmark, Library, Search, Sun, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <Link href="/" className="text-xl font-bold">
              NovelNest
            </Link>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for novels..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/discover"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Discover
              </Link>
              <Link
                href="/library"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Library
              </Link>
              <Link
                href="/profile"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Profile
              </Link>
            </nav>
            <ThemeToggle />
            <Button size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Library className="h-5 w-5" />
              <span className="sr-only">Library</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Personal Reading Sanctuary
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover, bookmark, and immerse yourself in thousands of novels. Join our community of readers
                    today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">
                    Browse Library
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative h-[450px] w-[350px] rotate-3 rounded-2xl bg-gradient-to-b from-primary/20 to-primary/10 p-4 shadow-xl">
                  <div className="absolute inset-4 rounded-lg bg-white dark:bg-gray-950 shadow-lg">
                    <div className="p-6 space-y-4">
                      <div className="h-6 w-2/3 rounded-md bg-primary/20"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-2/3 rounded-md bg-muted"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-full rounded-md bg-muted"></div>
                        <div className="h-4 w-1/2 rounded-md bg-muted"></div>
                      </div>
                      <div className="flex justify-end">
                        <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Trending Now
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popular This Week</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover what other readers are enjoying right now
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {[1, 2, 3].map((i) => (
                <Link
                  href={`/novel/${i}`}
                  key={i}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1"
                >
                  <div className="aspect-[2/3] w-full bg-muted">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                      <BookOpen className="h-12 w-12 text-primary/40" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-background to-background/80 p-4">
                    <h3 className="font-semibold text-lg">The Midnight Chronicles</h3>
                    <p className="text-sm text-muted-foreground">By J.K. Rowling</p>
                    <div className="mt-2 flex items-center text-sm">
                      <div className="flex items-center">
                        <TrendingUp className="mr-1 h-4 w-4 text-primary" />
                        <span>4.8</span>
                      </div>
                      <div className="ml-4 flex items-center">
                        <Bookmark className="mr-1 h-4 w-4 text-primary" />
                        <span>2.3k</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Browse by Genre</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find your next favorite read in our extensive collection
                </p>
              </div>
            </div>
            <Tabs defaultValue="fantasy" className="mt-8 w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 md:grid-cols-7">
                <TabsTrigger value="fantasy">Fantasy</TabsTrigger>
                <TabsTrigger value="scifi">Sci-Fi</TabsTrigger>
                <TabsTrigger value="romance">Romance</TabsTrigger>
                <TabsTrigger value="mystery">Mystery</TabsTrigger>
                <TabsTrigger value="thriller" className="hidden md:inline-flex">
                  Thriller
                </TabsTrigger>
                <TabsTrigger value="historical" className="hidden md:inline-flex">
                  Historical
                </TabsTrigger>
                <TabsTrigger value="more" className="hidden md:inline-flex">
                  More
                </TabsTrigger>
              </TabsList>
              <TabsContent value="fantasy" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="aspect-[2/1] w-full bg-muted">
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                            <BookOpen className="h-8 w-8 text-primary/40" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="line-clamp-1">The Dragon's Legacy</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">By Sarah J. Maas</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <div className="flex items-center text-sm">
                          <TrendingUp className="mr-1 h-4 w-4 text-primary" />
                          <span>4.7</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="scifi" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="aspect-[2/1] w-full bg-muted">
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-500/10">
                            <BookOpen className="h-8 w-8 text-blue-500/40" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="line-clamp-1">Quantum Paradox</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">By Andy Weir</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <div className="flex items-center text-sm">
                          <TrendingUp className="mr-1 h-4 w-4 text-primary" />
                          <span>4.9</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {/* Other tab contents would be similar */}
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Designed for the Modern Reader
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  NovelNest offers a seamless reading experience with features that enhance your journey through every
                  story.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <Bookmark className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Smart Bookmarks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Never lose your place again. Our smart bookmarks remember exactly where you left off.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Library className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Personal Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Organize your collection with custom shelves and categories that fit your reading style.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Sun className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Light & Dark Modes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Read comfortably day or night with customizable themes that are easy on your eyes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Community Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Discover what others think with ratings and reviews from our passionate community.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Reading Community</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Sign up today and get access to thousands of novels, personalized recommendations, and more.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Get Started</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} NovelNest. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

