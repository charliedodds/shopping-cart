import '../styles/Home.css';

const Home = () => (
	<section className='Home'>
		<h1 className='Home-title'>Steam Sale Price Checker</h1>
		<p className='Home-para'>
			This project was built as part of The Odin Project to practice React
			Router with a couple of routes, but does function relatively well as a
			Steam sale price checker.
		</p>
		<p className='Home-para'>
			Head to the Shop tab to see the top 60 current sales (ordered by how good
			the sale is, not by price or rating).
		</p>
	</section>
);

export default Home;
