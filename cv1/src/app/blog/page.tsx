import { get } from "http";

import BlogCard from "@/components/me/blog-card";

const mockData = [
    {
        title: "Teste 1",
        pubDate: "2024-01-27 20:11:28",
        link: "https://medium.com/@josefonte/teste-1-blog-post-498acc2c6850?source=rss-1eb24fd770d9------2",
        description:
            "Introduction Artificial Intelligence (AI) has rapidly evolved from a futuristic concept to a reality that permeates our daily lives. Its impact on various industries and society as a whole is undeniable, and the continuous advancements in AI technology are reshaping the way we live and work. In this blog post, we will explore the current state of AI, its applications across different sectors, and the ethical considerations that accompany this transformative technology.",

        img: "https://cdn-images-1.medium.com/max/1024/1*BcWYmsZAO_6HWjAfK4_jQw.png",
    },
    {
        title: "Teste 2",
        pubDate: "2024-01-27 20:11:28",
        link: "https://medium.com/@josefonte/teste-1-blog-post-498acc2c6850?source=rss-1eb24fd770d9------2",
        description:
            "Introduction Artificial Intelligence (AI) has rapidly evolved from a futuristic concept to a reality that permeates our daily lives. Its impact on various industries and society as a whole is undeniable, and the continuous advancements in AI technology are reshaping the way we live and work. In this blog post, we will explore the current state of AI, its applications across different sectors, and the ethical considerations that accompany this transformative technology.",

        img: "https://cdn-images-1.medium.com/max/1024/1*BcWYmsZAO_6HWjAfK4_jQw.png",
    },
    {
        title: "Teste 3",
        pubDate: "2024-01-27 20:11:28",
        link: "https://medium.com/@josefonte/teste-1-blog-post-498acc2c6850?source=rss-1eb24fd770d9------2",
        description:
            "Introduction Artificial Intelligence (AI) has rapidly evolved from a futuristic concept to a reality that permeates our daily lives. Its impact on various industries and society as a whole is undeniable, and the continuous advancements in AI technology are reshaping the way we live and work. In this blog post, we will explore the current state of AI, its applications across different sectors, and the ethical considerations that accompany this transformative technology.",

        img: "https://cdn-images-1.medium.com/max/1024/1*BcWYmsZAO_6HWjAfK4_jQw.png",
    },
];

function getMediumPosts2() {
    try {
        fetch("https://rss.app/feeds/v1.1/oTFzrNtIzlGZt04I.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                return data;
            });
    } catch (error) {
        console.log(error);
        return null;
    }
}

function getMediumPosts() {
    try {
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@josefonte"
        )
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default function Blog() {
    const mediumPosts = getMediumPosts();
    console.log(mediumPosts);
    return (
        <div>
            {mockData.map((post, index) => (
                <BlogCard
                    key={index}
                    title={post.title}
                    description={post.description}
                    pubDate={post.pubDate}
                    link={post.link}
                    img={post.img}
                />
            ))}
        </div>
    );
}
