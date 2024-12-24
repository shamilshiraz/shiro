import React from 'react'

function About() {
  return (
    <div className='grid  grid-cols-2 w-screen  bg-black-900 flex'>
        <div className="flex-col hidden sm:block justify-between">
            <p className='pt-[10%] text-4xl opacity-15 '>"Some corny ass quote"</p>
            <p className='text-[10rem] sticky top-[70%] opacity-15'>about</p>
        </div>
        <div className="grid grid-cols-2">
            <div className="pt-[20%] sm:w-full">
            <b className="text-8xl block sm:hidden">about</b>
            <p className='text-2xl'>"I am a designer and Developer based in india, I like designing things"</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis eos dolore non. Ab vel commodi ex ut eius odio similique molestias vitae perspiciatis atque, ipsam ad et temporibus dicta harum.</p>
                <img src="./main.jpg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dicta molestiae mollitia ipsam? Impedit quidem ullam numquam velit excepturi, saepe eius sapiente neque enim labore molestias eligendi necessitatibus quas reprehenderit.</p>
            </div>
            <div className="hidden sm:block"></div>
        </div>
    </div>
  )
}

export default About
