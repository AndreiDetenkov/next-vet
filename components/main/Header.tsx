import Image from 'next/image'
import logo from 'public/logo.png'

const Header = () => {
  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <span className="ml-2">Маняша</span>
        </div>

        <div className="flex items-center justify-end">
          <div>
            <div>локация</div>
            <div>Одинцово, ул.Вокзальная, 39</div>
          </div>

          <div className="ml-10">
            <div>график работы</div>
            <div>10:00 - 19:00</div>
          </div>

          <div className="ml-10">
            <div>телефон</div>
            <div>+7 (985) 774-79-44</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
