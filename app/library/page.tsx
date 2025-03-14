import Link from "next/link"
import { BookOpen, Grid, List, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LibraryPage() {
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
                placeholder="Search your library..."
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
              <Link href="/library" className="text-sm font-medium transition-colors hover:text-primary">
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
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Your Library</h1>
              <p className="text-muted-foreground">Manage your personal collection of novels</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Grid className="h-4 w-4" />
                <span className="hidden sm:inline">Grid</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">List</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="all">All Books</TabsTrigger>
              <TabsTrigger value="reading">Reading</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Link href={`/novel/${i}`} className="block">
                        <div className="aspect-[2/3] w-full bg-muted">
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                            <BookOpen className="h-12 w-12 text-primary/40" />
                          </div>
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Link href={`/novel/${i}`} className="block">
                        <h3 className="font-semibold line-clamp-1">The Midnight Chronicles</h3>
                        <p className="text-sm text-muted-foreground">By J.K. Rowling</p>
                      </Link>
                      <div className="mt-2">
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[35%]" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">35% complete</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                      <Button size="sm">Continue</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reading" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Link href={`/novel/${i}`} className="block">
                        <div className="aspect-[2/3] w-full bg-muted">
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                            <BookOpen className="h-12 w-12 text-primary/40" />
                          </div>
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Link href={`/novel/${i}`} className="block">
                        <h3 className="font-semibold line-clamp-1">The Midnight Chronicles</h3>
                        <p className="text-sm text-muted-foreground">By J.K. Rowling</p>
                      </Link>
                      <div className="mt-2">
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[35%]" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">35% complete</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                      <Button size="sm">Continue</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Link href={`/novel/${i}`} className="block">
                        <div className="aspect-[2/3] w-full bg-muted">
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                            <BookOpen className="h-12 w-12 text-primary/40" />
                          </div>
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Link href={`/novel/${i}`} className="block">
                        <h3 className="font-semibold line-clamp-1">The Shadow Keeper</h3>
                        <p className="text-sm text-muted-foreground">By Neil Gaiman</p>
                      </Link>
                      <div className="mt-2">
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[100%]" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Completed</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                      <Button size="sm">Read Again</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="wishlist" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Link href={`/novel/${i}`} className="block">
                        <div className="aspect-[2/3] w-full bg-muted">
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                            <BookOpen className="h-12 w-12 text-primary/40" />
                          </div>
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Link href={`/novel/${i}`} className="block">
                        <h3 className="font-semibold line-clamp-1">The Quantum Paradox</h3>
                        <p className="text-sm text-muted-foreground">By Andy Weir</p>
                      </Link>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                      <Button size="sm">Start Reading</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
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

