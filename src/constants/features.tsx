import InstantAccount from "../assets/InstantAccount";
import LinkManagement from "../assets/LinkManagement";
import SimplePrivate from "../assets/SimplePrivate";

export const features = [
    {
        title: "Instant Shortening",
        descriptions: [
            {
                head: "No Hassle",
                description: "Get your links shortened in a matter of seconds without the need for any sign-up or login process. Simply paste your URL and get a shortened version instantly."
            },
            
        ],
        image: <InstantAccount/>,
    },
    {
        title: "Link Management",
        descriptions: [
            {
                head: "Local Storage",
                description: "Your shortened links are stored directly in your browser, ensuring that you have easy access to them whenever you need, without the need to log in or sync across devices."
            },
           
        ],
        image: <LinkManagement/>,
    },
    {
        title: "Simple & Private",
        descriptions: [
            {
                head: "No Personal Data Required",
                description: "Enjoy the peace of mind knowing that your personal information remains private. We don’t ask for your email, phone number, or any other personal details."
            },
            
        ],
        image: <SimplePrivate/>,
    }
];
