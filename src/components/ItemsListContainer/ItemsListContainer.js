import "./ItemsListContainer.css";
import Card from "../Cards/Cards.js";

const ItemsListContainer = ({ nombre }) => {
    return (<section id="itemsContainer" className="d-flex flex-row flex-wrap">
        <h2>Bienvenid@ <span>{nombre}</span></h2>
        <Card name='1995 Barcelona Home' price='8.500,00' src='https://www.jerseygoal.co/images/Retro-Jersey/1992-1995%20Barcelona%20Home%20Retro%20Jersey%201.jpg' stock={5} initial={1} />
        <Card name='1994 WC Argentina Away' price='9.500,00' src='https://www.jerseygoal.co/images/Retro-Jersey/1994-1995%20Argentina%20Away%20Retro%20Jersey%20701.jpg' stock={15} initial={2} />
        <Card name='1999 Inter Milan Home' price='7.000,00' src='https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Intel%20Milan%20Home%20Long%20Sleeve%20Retro%20Jersey%20BAGGIO%2010%20Shirt.jpg' stock={7} initial={2} />
        <Card name='1998 Boca Jrs Home' price='8.900,00' src='https://www.jerseygoal.co/images/Retro-Jersey/1997-1998%20Boca%20Juniors%20Home%20Shirt%20Maradona%2010.jpg' stock={10} initial={2} />
        <Card name='1998 WC France Home' price='11.500,00' src='https://www.jerseygoal.co/images/France/1998%20World%20Cup%20France%20Home%20Final%20Jersey.jpg' stock={11} initial={6} />
        <Card name='1997 Arsenal Home' price='10.500,00' src='https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Arsenal%20Home%20Retro%20Jersey%201.jpg' stock={6} initial={4} />
    </section>);
}

export default ItemsListContainer;