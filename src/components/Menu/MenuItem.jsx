
import React from 'react'
import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
    Sidebar,
    Link,
} from "lucide-react"
import { MenuNavItem } from './MenuNav'
import Segurado from '../../pages/Segurado'

const MenuItem = () => {
  return (
    <section>
        <MenuNavItem 
            icon={<LayoutDashboard size={20}/>}
            text="Dashboard"
            alert
        />
        <MenuNavItem 
            icon={<BarChart3 size={20} />} 
            text="Estatisticas" />
          
        <MenuNavItem 
            icon={<UserCircle size={20} />} 
            text="Segurados" active 
            />
            
        <MenuNavItem icon={<Boxes size={20} />} text="Invetario" />
        <MenuNavItem icon={<Package size={20} />} text="Pacotes" />
        <MenuNavItem icon={<Receipt size={20} />} text="Finaceiro" />
        <MenuNavItem icon={<Settings size={20} />} text="Configurações"/>
        <MenuNavItem icon={<LifeBuoy size={20} />} text="Ajuda"/>
    </section>
  )
}

export default MenuItem

