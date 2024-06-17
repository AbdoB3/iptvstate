import Image from "next/image";

const Button = ({ type, title, variant, full, icon }) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={22} height={22} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button