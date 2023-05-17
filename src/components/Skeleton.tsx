interface Props{
    className:string
}

const Skeleton = ({className}:Props) => {
  return (
    <div className="animate-pulse">
        <div className={"bg-gray-300 rounded-md " + className}></div>
    </div>
  )
}

export default Skeleton