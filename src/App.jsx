import React from "react"
import { Flex, Image } from "@kuma-ui/core"
import "./App.css"
import postsData from "./data"

// import naturePicture from "../public/2021-12-21_07-34.jpg"

function BookPost({ id, imageUrl, paragraphs }) {
  console.log(id, imageUrl, paragraphs)
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"} className="background-book-post" >
      <main className="book-wrapper">
        <Flex alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
          <Image
            src={imageUrl}
            alt="Nature"
            aspectRatio={1 / 1}
            mb={24}
            height={210}
          />
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "first-p" : ""}>
              {paragraph}
            </p>
          ))}
        </Flex>
      </main>
    </Flex>
  )
}

function App() {
  return (
    <>
      {postsData.map((post) => (
        <BookPost
          key={post.id}
          id={post.id}
          imageUrl={post.imageUrl}
          paragraphs={post.paragraphs}
        />
      ))}
    </>
  )
}

export default App
