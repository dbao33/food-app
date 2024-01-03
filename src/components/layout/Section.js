
const Section = ({ sub, main }) => {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {sub}
      </h3>
      <h2 className=" text-primary font-bold text-4xl italic">
        {main}
      </h2>
    </>
  )
}
export default Section