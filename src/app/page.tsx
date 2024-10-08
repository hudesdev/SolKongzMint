"use client"
import Image from 'next/image'
import ScholashipBtn from './component/ScholashipBtn'
import Link from 'next/link'
// import { useRouter } from 'next/router';
import assets from './util/images';
import { FaAlignJustify, FaHouse, FaPlus, FaMinus, FaAngleLeft, FaAngleRight, FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Carousel } from '@trendyol-js/react-carousel'; 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

// import required modules
import { Pagination,  Keyboard, Navigation, } from 'swiper/modules';

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  // const router = useRouter();
  const itemClasses = {
    base: "py-0 w-full ",
    title: "text-borderYellow text-content sm:text-title w-full text-white data-[open=true]:text-borderYellow text_shadow",
    trigger: "px-2 py-0 rounded-lg h-14 flex justify-between items-center",
    indicator: "text-borderYellow",
    content: "text-small px-2",
  };

  return (
    <div className='w-full bg-bgColor font-ShPinscher'>
      {/* --------------------------------- Header --------------------------------- */}
      <div className='w-full flex flex-col justify-center items-center relative'>
        <div className='w-5/6 md:w-2/3 flex justify-between mt-8 h-[40px]'>
          <ScholashipBtn content="APPLY FOR A SCHOLARSHIP" url="/contact" />
          <div className='hidden md:flex justify-between gap-6 text-white text-content'>
            <Link href="/kongzdao" className='hover:border-b-4 hover:border-darkYello pb-1 duration-200'>Kongz Dao</Link>
            <Link href="/shop" className='hover:border-b-4 hover:border-darkYello pb-1 duration-200'>Shop</Link>
            <Link href="https://twitter.com/solkongz" className='hover:border-b-4 hover:border-darkYello pb-1 duration-200'>Twitter</Link>
            <Link href="https://discord.gg/hrQX37Cs" className='hover:border-b-4 hover:border-darkYello pb-1 duration-200'>Discord</Link>
          </div>
          <div
            onClick={() => setOpen(!isOpen)}
            className='flex md:hidden justify-center items-center bg-white p-3 rounded-[10px] border-[1px] border-[#000] w-[32] sm:w-[50px] text-black hover:bg-btnYellow cursor-pointer'
          >
            <FaAlignJustify className="w-[16px] h-[16px]" />
          </div>
          {isOpen && (
            <div className='absolute w-full bg-bgColor top-[4.6rem] left-0 p-4 text-white flex md:hidden flex-col gap-4'>
              <Link href="/kongzdao" className='w-full Kongz Dao text-center hover:bg-[#907848] duration-300'>Kongz Dao</Link>
              <Link href="/shop" className='w-full Kongz Dao text-center hover:bg-[#907848] duration-300'>Shop</Link>
              <Link href="https://twitter.com/solkongz" className='w-full Kongz Dao text-center hover:bg-[#907848] duration-300'>Twitter</Link>
              <Link href="https://discord.gg/hrQX37Cs" className='w-full Kongz Dao text-center hover:bg-[#907848] duration-300'>Discord</Link>
            </div>
          )}
        </div>
      </div>
      {/* --------------------------------- Header End ----------------------------- */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-full md:w-4/5 flex justify-center'>
          <img src='/img/KongzDAObySolKongzV2-noBG.png' />
        </div>
      </div>
      {/* --------------------------------- Body ----------------------------------- */}

      <div className='w-full flex flex-col justify-between items-center gap-20'>
        <p className='text-white text-content text-center px-2'>{`The SOLKONGZ is a collection of 2,222 NFTs that grant the holder exclusive access to 'The Jungle' and the strong community of degenerates that call it home.`}</p>
        <p className='text-borderYellow text-title text-center'>CHECK OUT THE <Link href='/kongzdao' className='text-white underline'>KONGZ DAO</Link>  PAGE FOR THE LATEST UPDATES ON THE PROJECT!</p>
        <div className='w-4/5 md:w-2/3 border-1 border-[1px] border-white rounded-[10px] border-dotted p-[25px] md:p-[50px] flex flex-col gap-6 text-white text-content'>
          <p>Dear Kongz</p>
          <p>I hope this letter finds you in good health and high spirits, even during these confusing market conditions. But fuck the bears, we are The Kongz and we have some exciting news.</p>
          <p>[No Roadmap, Pure Fun] <br />
            {`In keeping with our community's adventurous spirit, we have decided to take a bold step by not providing a traditional roadmap. Instead, we are placing our trust in the collective wisdom and creativity of the SolKongz community. We believe that by relinquishing some control, we can foster a more dynamic and exciting environment where the possibilities are endless.`}
          </p>
          <p>[New Art] <br />
            {`The new art will go by the name of KongzDAO, and it is a testament to our original art and community. We have curated a whole new collection of NFTs, that not only reflect the spirit of 'crypto culture' but also remains in line with our OG branding and values. With a brand new look and an important role to play in the SolKongz ecosystem, each unique Kong is a masterpiece in its own right.`}
          </p>
          <p>Our main vision with KongzDAO goes beyond just creating NFTs — we plan to introduce a transformative element to the SolKongz ecosystem, a catalyst in a self-sustaining universe where each exchange subtly contributes to the vitality and growth of our community. Interwoven with a unique mechanism, this  plays a pivotal role in nurturing the network and offering rewards to those embarking on this journey with us.</p>
          <p>{`Our approach isn't solely about creating value; it's also about fostering a prosperity within ‘The Jungle’.As we embark on this journey together, we want to reaffirm our community values of crypto culture, brotherhood, and having a blast while pursuing financial gains. These principles have been the bedrock of SolKongz, and they will continue to guide us into this new era of the Kongz.
          Our next plan of action will be dropped shortly.And we kinda forgot we to mention... we airdropped 268 WL tokens to all the OGs that participated in the snapshot. Check your wallets and thank you for your loyalty.
          Kongz Team`}</p>
        </div>
        <div className='w-4/5 border-1 border-[6px] border-borderYellow rounded-[10px] p-[20px] md:p-[30px] flex flex-col items-center gap-4 text-white'>
          <div className='text-[38px] text_shadow' >RARITY</div>
          <p>Each NFT is algorithmically generated by combining 96+ unique traits with varying rarity across categories.</p>
          <div className='flex flex-col md:flex-row  justify-between gap-2 w-full '>
            <div className='flex flex-col gap-2 w-full md:w-1/2'>
              <p className='text-title'>Type</p>
              <table>
                <tbody className='leading-8 border-spacing-2'>
                  <tr className="odd:bg-darkYellow">
                    <td className='w-1/2'>2,222</td>
                    <td>Total SolKongz</td>
                  </tr>
                  <tr className="odd:bg-darkYellow">
                    <td className='w-1/2'>18</td>
                    <td>1/1 Legandary Kongz</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex flex-col gap-2 w-full md:w-1/2 odd:bg-darkYello'>
              <p className='text-title'>Variation</p>
              <table>
                <tbody className='leading-8'>
                  <tr className="odd:bg-darkYellow">
                    <td className='w-1/2'>Fur Color</td>
                    <td>Head Traits</td>
                  </tr>
                  <tr className="odd:bg-darkYellow">
                    <td className='w-1/2'>Eye Traits</td>
                    <td>Mouth Traits</td>
                  </tr>
                  <tr className="odd:bg-darkYellow">
                    <td className='w-1/2'>21</td>
                    <td>Torso Traits</td>
                  </tr>
                  <tr className="odd:bg-darkYellow">
                    <td className='w-1/2'>Torso Traits</td>
                    <td>Background</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className='text-[38px] text-borderYellow text_shadow'>1/1 Legendary Kongz</p>

        
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Pagination]}
          className="mySwiper"                   
      >
        {
        assets.map((val, index) => {
          return <SwiperSlide key={val.url+"1"}>
            <div className='img_wraper relative'>
              <img src={val.url} alt="" className='rounded-[15px] border-8 border-borderYellow pink_shadow' />
              <div className='absolute w-full flex justify-center items-center bottom-[-25px]'>
                  <button className=' pink_shadow text-white rounded-[10px] border-[6px] border-borderYellow px-4 bg-bgColor text-[18px] sm:text-[38px]'>{val.title}</button>
              </div>
            </div>
          </SwiperSlide>

        })
        }
      </Swiper>
        <div className='w-full relative overflow-hidden'>
          <img src='https://assets-global.website-files.com/6358359a8c87f073fb0540bb/6358359a8c87f04f39054152_unknown-p-2000.png' width={100} height={70} className='w-full' alt='noimage'></img>
          <img src='https://assets-global.website-files.com/6358359a8c87f073fb0540bb/6358359a8c87f0848e054151_unkno5668wn-p-500.png' className='bottom-0 md:bottom-9 right-0 md:right-5 absolute border-[6px] border-white rounded-xl w-1/3 lg:w-1/4 box_shadow' />
        </div>
        <p className='text-[38px] text-borderYellow text_shadow'>MEET THE NEW TEAM</p>
        <div className='flex flex-col md:flex-row justify-around w-full p-2 gap-5'>
          <div className='flex flex-col gap-10 w-full md:w-1/4 justify-between items-center'>
            <div className='relative dashoboard__teamimg'>
              <img src='/img/team/kef.gif' className='box_shadow border-[3px] border-borderYellow' />
              <p className=' box_shadow text-white text-content absolute border-[1px] border-borderYellow bottom-[-1rem] bg-bgColor p-2 left-[calc(50%-2.8rem)]'>KEFARSKEN</p>
            </div>
            <Link href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.solkongz.net%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ekefarsken&region=follow_link&screen_name=kefarsken" className="h-8 duration-300 text-borderYellow border-[1px] border-borderYellow rounded-[10px] px-3 py-1 hover:bg-[#907848] hover:text-[#132a3b] text-center flex justify-center items-center w-1/2"><FaXTwitter /> FOLLOW KEFARSKEN</Link>
          </div>
          <div className='flex flex-col gap-10 w-full md:w-1/4 justify-between items-center'>
            <div className='relative dashoboard__teamimg'>
              <img src='/img/team/nate.gif' className='box_shadow border-[3px] border-borderYellow' />
              <p className='box_shadow text-white text-content absolute border-[1px] border-borderYellow bottom-[-1rem] bg-bgColor p-2 left-[calc(50%-2.0rem)]'>NATE</p>
            </div>
            <Link href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.solkongz.net%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ec0gnate&region=follow_link&screen_name=c0gnate" className="h-8 duration-300 text-borderYellow border-[1px] border-borderYellow rounded-[10px] px-3 py-1 hover:bg-[#907848] hover:text-[#132a3b] text-center flex justify-center items-center w-1/2"><FaXTwitter /> FOLLOW Nate</Link>
          </div>
          <div className='flex flex-col gap-10 w-full md:w-1/4 justify-between items-center'>
            <div className='relative dashoboard__teamimg'>
              <img src='/img/team/cutrab.gif' className='box_shadow border-[3px] border-borderYellow' />
              <p className='box_shadow text-white text-content absolute border-[1px] border-borderYellow bottom-[-1rem] bg-bgColor p-2 left-[calc(50%-2.0rem)]'>Cutrab</p>
            </div>
            <Link href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.solkongz.net%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Esolkongz&region=follow_link&screen_name=solkongz" className="h-8 duration-300 text-borderYellow border-[1px] border-borderYellow rounded-[10px] px-3 py-1 hover:bg-[#907848] hover:text-[#132a3b] text-center flex justify-center items-center w-1/2"><FaXTwitter /> FOLLOW SolKongz</Link>
          </div>
        </div>
        <div className='w-full sm:w-2/3'>
          <p className='text-[45px] text-borderYellow text_shadow pl-2'>FAQ</p>

          <Accordion
            showDivider={false}
            className="p-2 flex flex-col gap-1 w-full"
            variant="shadow"
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="how can i join solkongz"
              title="HOW CAN I JOIN SOLKONGZ"
              indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)}
              className='border-b-4 border-[#09364A]'
            >
              <p className='text-content text-white '>You can acquire a SOLKONG either through secondary marketplaces like <Link href="https://magiceden.io/marketplace/solkongz" className='text-borderYellow underline' >Magic Eden</Link> , <Link href="https://solsea.io/c/620fd1cc5f38c6260eb65ca1" className='text-borderYellow underline'>OpenSea</Link>  and SolSea OR you can apply to our <Link href="/contact" className='text-borderYellow underline'>Scholarship program</Link> . You might even get lucky in one of our giveaways </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="how can i join solkongz"
              title="WHAT IS THE TREEHOUSE"
              indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)}
              className='border-b-4 border-[#09364A]'

            >
              <p className='text-content text-white '>The Treehouse is an exclusive corner of the Jungle where all of the SOLKONGZ gather to socialize and share their knowledge/creations. The KONGZ are a solid tribe of gorillas that take care of one another to provide a safe-haven to grow within the mysterious Solana Jungle. This will also serve as a platform we can expand and add utility to in the future.</p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="how can i join solkongz"
              title="WHAT'S NEXT"
              indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)}
            >
              <p className='text-content text-white '>Keep an eye on our <Link href="https://twitter.com/SolKongz" className='text-borderYellow underline'>Twitter</Link> . We will be releasing more updates very soon.</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 py-6'>
          <ScholashipBtn content="JOIN THE GANG" url="https://magiceden.io/marketplace/solkongz" />
          <Link href="http://creativecommons.org/publicdomain/zero/1.0/" className='mt-6'><img src='https://licensebuttons.net/p/zero/1.0/88x31.png' /></Link>
          <p className='text-[#555] mb-5'>To the extent possible under law, The SolKongz Team has waived all copyright and related or neighboring rights to SolKongz.</p>
        </div>
      </div>
      {/* --------------------------------- Body End-------------------------------- */}
    </div>
  )
}
