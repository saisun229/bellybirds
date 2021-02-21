import '../mixins.scss';


export default function Card(props:any) {

  return (
   <section className="card">
     {props.children}
   </section>
  )
}