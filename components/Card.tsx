interface Props {
  Content: JSX.Element,
  Links: JSX.Element,
  vidSource: string,
  place: "Left" | "Right",
  title: string
}

const Card = ({Content, Links, vidSource, place, title} : Props) => {
  return (
    <div className="col-span-2 lg:col-span-4 lg:grid lg:grid-cols-5 lg:px-[min(1vw,12rem)] lg:grid-rows-1 gap-8 my-12 flex flex-col px-8 justify-center items-center">
      <div className={`lg:col-span-3 lg:row-span-1 row-span-2 col-span-1 ${place == "Left" ? "lg:col-start-1" : "lg:col-start-3"} lg:row-start-1 flex flex-col gap-2 px-[min(4rem,0.1vw)]`}>
        <h1 className="py-8 text-4xl font-bold text-center">{title}</h1>
        <div className='flex lg:flex-row flex-col gap-8 xl:gap-16 lg:divide-x lg:dark:divide-gray-700 lg:divide-gray-300'>
          <div>{Content}</div>
          <div className='flex flex-col items-center justify-center lg:w-auto text-2xl lg:text-lg xl:text-2xl px-4 xl:px-8'>{Links}</div>
        </div>
      </div>
      <div className={`lg:col-span-2 ${place == "Left" ? "lg:col-start-4" : "lg:col-start-1"} lg:row-start-1 flex items-center justify-center max-w-2xl`}>
        <video autoPlay loop muted playsInline src={vidSource} className="rounded-md shadow-xl" />
      </div>
    </div>
  )
}

export default Card;
