import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Header from "./Header"

export default function Profile({ name, email, image, signOut }) {
    return (
        <div className="flex flex-col items-center min-h-screen bg-lightdark w-full">
            <Header />
            <div className="max-w-md w-full space-y-6 mt-12">
                <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={image} alt="@shadcn" />
                        <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <h1 className="text-3xl font-bold mt-4">{name}</h1>
                </div>
                <div className="grid gap-4">
                    <div className="flex items-center justify-between bg-muted px-4 py-3 rounded-lg">
                        <div className="text-muted-foreground">Email</div>
                        <div className="text-foreground">{email}</div>
                    </div>
                    <Button variant="destructive" className="w-full" onClick={() => signOut()}>
                        <div className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}