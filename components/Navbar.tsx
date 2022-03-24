
import {Activelink} from "./Activelink"
import styles from "./Navbar.module.css";



const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const Navbar = () => {
  return (
   <nav className ={styles['menu-container']}>
       {/* <Activelink key="/" text="Home" href="/" />
       <Activelink key="/contact" text="Contact" href="/contact" />
       <Activelink key="/pricing" text="Pricing" href="/pricing" />
       <Activelink key="/about" text="About" href="/about" /> */}
       {menuItems.map(menuItem => {return (<Activelink key={menuItem.href} text={menuItem.text} href={menuItem.href} />)})}
   </nav>
  )
}
