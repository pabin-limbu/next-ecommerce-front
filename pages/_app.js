import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

body{
  font-family: 'Poppins', sans-serif;
  background-color: rgb(245, 245, 245);
}


.embla__button--prev{
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
}
.embla__button--next{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
}

.embla__button {
  -webkit-tap-highlight-color: rgba(49, 49, 49, 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
   ${"" /* box-shadow: inset 0 0 0 0.2rem rgb(234, 234, 234);  */}
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;

  color: rgb(54, 49, 61);
  display: flex;
  align-items: center;
  justify-content: center;
}

.embla__button__svg {
  width: 35%;
  height: 50%;
  color: white;
}
.embla__dots {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
  position: absolute;
  bottom: 0;
  left: 50%;
}
.embla__dot {
  -webkit-tap-highlight-color: rgba(49, 49, 49, 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 2rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.embla__dot:after {
  box-shadow: inset 0 0 0 0.2rem rgb(54, 49, 61);
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  content: '';
}
.embla__dot--selected:after {
  box-shadow: inset 0 0 0 0.1rem rgb(234, 234, 234);

}

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
