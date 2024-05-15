export default function NumbersAbout() {
  return (
    <section className="flex flex-col items-center gap-24 h-[800px] lg:flex-row justify-around lg:gap-0">
      <div className="flex flex-col items-center">
        <h1>15K</h1>
        <h5 className="text-softText">Happy Customers</h5>
      </div>
      <div className="flex flex-col items-center">
        <h1>150K</h1>
        <h5 className="text-softText">Monthly Visitors</h5>
      </div>
      <div className="flex flex-col items-center">
        <h1>15</h1>
        <h5 className="text-softText">Countries Worldwide</h5>
      </div>
      <div className="flex flex-col items-center">
        <h1>100+</h1>
        <h5 className="text-softText">Top Partners</h5>
      </div>
    </section>
  );
}
