import Link from "next/link"
import { ArrowLeft, Bookmark, BookOpen, Heart, MessageSquare, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NovelPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 mr-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back</span>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold truncate">The Midnight Chronicles</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
              <span className="sr-only">Bookmark</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr_280px]">
          <div className="hidden md:block space-y-6">
            <div className="aspect-[2/3] w-full bg-muted rounded-lg overflow-hidden">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                <BookOpen className="h-16 w-16 text-primary/40" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-xl">The Midnight Chronicles</h2>
              <p className="text-sm text-muted-foreground">By J.K. Rowling</p>
              <div className="flex items-center text-sm">
                <div className="flex items-center">
                  <Heart className="mr-1 h-4 w-4 text-primary" />
                  <span>4.8 (2.3k ratings)</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Genre</h3>
                  <p className="text-sm text-muted-foreground">Fantasy, Adventure</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Published</h3>
                  <p className="text-sm text-muted-foreground">June 2023</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Pages</h3>
                  <p className="text-sm text-muted-foreground">432</p>
                </div>
              </div>
              <Separator className="my-4" />
              <Button className="w-full">Continue Reading</Button>
              <Button variant="outline" className="w-full">
                <Bookmark className="mr-2 h-4 w-4" />
                Add to Library
              </Button>
            </div>
          </div>
          <div>
            <Tabs defaultValue="read">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="read">Read</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="read" className="mt-6">
                <div className="md:hidden flex justify-center mb-6">
                  <div className="aspect-[2/3] w-48 bg-muted rounded-lg overflow-hidden">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                      <BookOpen className="h-12 w-12 text-primary/40" />
                    </div>
                  </div>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  <h2>Chapter 1: The Awakening</h2>
                  <p>
                    The clock struck midnight as Emma's eyes fluttered open. Something had changed in the air—a subtle
                    shift that most would miss, but she had been waiting for this moment her entire life. The ancient
                    prophecy her grandmother had whispered about during long winter nights was finally coming to pass.
                  </p>
                  <p>
                    She rose from her bed, drawn to the window by an inexplicable force. Outside, the moon hung full and
                    bright, casting an ethereal glow over the sleeping town. But Emma knew better—the town wasn't truly
                    sleeping. Beneath the surface of ordinary life, ancient powers were stirring.
                  </p>
                  <p>
                    "It's time," she whispered to herself, reaching for the pendant that had been passed down through
                    generations of her family. The metal was warm to the touch, pulsing with an energy that seemed to
                    match the beating of her heart.
                  </p>
                  <p>
                    The Chronicles had begun, and whether she was ready or not, Emma was now at the center of a story
                    centuries in the making. She took a deep breath, knowing that by morning, nothing would ever be the
                    same again.
                  </p>
                  <h2>Chapter 2: The Calling</h2>
                  <p>
                    The morning brought with it a strange fog that clung to the streets of Ravenwood. Emma made her way
                    through the mist, her pendant hidden beneath her jacket but still radiating warmth against her skin.
                  </p>
                  <p>
                    She had always been different from the other residents of the small town—more attuned to the
                    whispers of the wind, more sensitive to the shifting energies that most people never noticed. Her
                    grandmother had called it a gift. Others might call it a curse.
                  </p>
                  <p>
                    As she rounded the corner toward the old library, a figure emerged from the fog. Tall and imposing,
                    with eyes that seemed to hold the wisdom of centuries.
                  </p>
                  <p>"You've felt it too," the stranger said. It wasn't a question.</p>
                  <p>
                    Emma nodded, her hand instinctively moving to the pendant. "The Chronicles," she replied. "They've
                    begun."
                  </p>
                  <p>
                    The stranger's expression remained impassive, but Emma could sense a shift in the energy around
                    them—relief, perhaps, or resignation.
                  </p>
                  <p>
                    "Then we don't have much time," he said, extending his hand. "My name is Marcus. And you, Emma
                    Blackwood, have a destiny to fulfill."
                  </p>
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="outline">Previous Chapter</Button>
                  <Button>Next Chapter</Button>
                </div>
              </TabsContent>
              <TabsContent value="details" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">Synopsis</h3>
                    <p className="mt-2 text-muted-foreground">
                      In a world where ancient magic lies dormant beneath the surface of everyday life, Emma Blackwood
                      discovers she is the key to awakening powers that have been sleeping for centuries. As the
                      prophesied Guardian of the Midnight Chronicles, she must navigate a dangerous landscape of secret
                      societies, mythical creatures, and dark forces that would use the Chronicles for their own
                      purposes. With the help of the mysterious Marcus, a centuries-old protector, Emma begins a journey
                      that will challenge everything she thought she knew about herself and the world around her.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold">About the Author</h3>
                    <div className="flex items-start gap-4 mt-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder-user.jpg" alt="Author" />
                        <AvatarFallback>JK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">J.K. Rowling</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          J.K. Rowling is a British author, philanthropist, film producer, and screenwriter best known
                          for writing the Harry Potter fantasy series, which has won multiple awards and sold more than
                          500 million copies, becoming the best-selling book series in history.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold">Book Information</h3>
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                      <div>
                        <dt className="text-sm font-medium">Publisher</dt>
                        <dd className="text-sm text-muted-foreground">Bloomsbury Publishing</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">Publication Date</dt>
                        <dd className="text-sm text-muted-foreground">June 15, 2023</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">ISBN</dt>
                        <dd className="text-sm text-muted-foreground">978-1234567890</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">Language</dt>
                        <dd className="text-sm text-muted-foreground">English</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">Pages</dt>
                        <dd className="text-sm text-muted-foreground">432</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">Format</dt>
                        <dd className="text-sm text-muted-foreground">Hardcover, eBook, Audiobook</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="comments" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">Reader Comments</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Join the conversation about The Midnight Chronicles
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>RW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">Reader123</h4>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm">
                          I couldn't put this book down! The world-building is incredible and Emma is such a relatable
                          protagonist despite the fantastical elements. Can't wait for the next chapter!
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary">
                            <Heart className="h-3 w-3" /> 24
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary">
                            <MessageSquare className="h-3 w-3" /> Reply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">BookLover456</h4>
                          <span className="text-xs text-muted-foreground">1 week ago</span>
                        </div>
                        <p className="text-sm">
                          The character development in this novel is outstanding. I especially love the dynamic between
                          Emma and Marcus. There's clearly more to his story than meets the eye!
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary">
                            <Heart className="h-3 w-3" /> 17
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary">
                            <MessageSquare className="h-3 w-3" /> Reply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">FantasyFan789</h4>
                          <span className="text-xs text-muted-foreground">2 weeks ago</span>
                        </div>
                        <p className="text-sm">
                          The prose is beautiful and the magic system is one of the most unique I've encountered in
                          years. Rowling has outdone herself with this new series!
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary">
                            <Heart className="h-3 w-3" /> 32
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary">
                            <MessageSquare className="h-3 w-3" /> Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-medium mb-2">Add Your Comment</h3>
                    <Textarea placeholder="Share your thoughts about this book..." className="min-h-[100px]" />
                    <Button className="mt-2">Post Comment</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="hidden lg:block space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Reading Progress</h3>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[35%]" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">35% complete (Chapter 7 of 20)</p>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Continue Reading
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Similar Books</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-12 h-16 bg-muted rounded">
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                          <BookOpen className="h-6 w-6 text-primary/40" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-1">The Shadow Keeper</h4>
                        <p className="text-xs text-muted-foreground">By Neil Gaiman</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Reading Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Reading Time</span>
                    <span>4h 23m</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Last Read</span>
                    <span>Yesterday</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Current Streak</span>
                    <span>5 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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

