import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import Home from './Home';
import About from './About';
import MyFooter from "./Footer";
import Settings from './Settings';
import ChatBot from "./ChatBot";
import Search from './Search';
import Movie from "./Movie";
import Starred from "./Starred"
import { ThemeProvider } from './ThemeContext';


function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<MyNavbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/chatbot" element={<ChatBot />} />
					<Route path="/search" element={<Search />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/movie" element={<Movie />} />
					<Route path="/favorites" element={<Starred />} />
				</Routes>
				<MyFooter />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
