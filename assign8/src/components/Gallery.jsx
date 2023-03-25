import "../styles/Gallery.css"

 function Gallery() {
  return (
    <section className="Gallery">
    <h2>Gallery</h2>
    <ul>
        <li><img width={200} src="/assets/pat.jpg" alt="pat"  /></li>
        <li><img width={200} src="/assets/linecry.jpg" alt="linecry" /></li>
        <li><img width={200} src="/assets/cry.jpg" alt="cry" /></li>
    </ul>
</section>
  );
}
export default Gallery;
