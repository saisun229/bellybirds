import './style.scss';


export default function Main(props: any) {

  return (
      <main className={props.class}>
          {props.children}
     </main>
  )
}