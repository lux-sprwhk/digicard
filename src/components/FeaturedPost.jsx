import { FaArrowRight } from 'react-icons/fa'
import featuredPostImg from '../assets/featured-post.png'

const featuredPostData = {
    title: "Pair Programming Is Madness — But Sometimes It's Sparta",
    description: "Yes, pairing is insane.But during onboarding? It's the only thing standing between you and yet another failed hire.",
    image: featuredPostImg,
    link: "https://luhsprwhk.beehiiv.com/p/pair-programming-is-madness-but-sometimes-it-s-sparta"
}

const FeaturedPost = () => {
    return (
        <section className="p-5 border-t border-gray-200 dark:border-dark-border">
            <h2 className="section-heading mb-4">Featured Post</h2>

            <div className="bg-gray-50 dark:bg-dark-bg rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <a href="#" className="block no-underline text-inherit">
                    <div className="aspect-video overflow-hidden">
                        <img
                            src={featuredPostData.image}
                            alt="Featured post thumbnail"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div className="p-4">
                        <h3 className="font-heading text-xl text-primary mb-2">
                            {featuredPostData.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {featuredPostData.description}
                        </p>

                        <div className="flex items-center text-primary">
                            <span>Read more</span>
                            <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default FeaturedPost