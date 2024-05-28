export default function About() {
  return (
    <div className="bg-gray-100">
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
            <p className="text-gray-600 mb-6">Welcome to <span className="font-semibold">Recipe Store</span>, where our mission is to <span className="font-semibold">quality food and recipes</span>. We are dedicated to <span className="font-semibold">give proper customer and consumer satisfaction</span>.</p>
            <p className="text-gray-600 mb-6">Our team consists of passionate professionals who are committed to delivering the best <span className="font-semibold">recipes</span> to our clients. Meet our team below:</p>
            
            <div className="flex flex-wrap justify-around">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold">Uttom Kumar Roy</h3>
                    <p className="text-gray-600">CEO</p>
                </div>
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold">Kajol Roy</h3>
                    <p className="text-gray-600">CTO</p>
                </div>
                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold">Parul Rani</h3>
                    <p className="text-gray-600">Head of Marketing</p>
                </div>
            </div>
            
            <p className="text-gray-600 mt-6">At <span className="font-semibold">Recipe Store</span>, we believe in <span className="font-semibold">providing quality foods</span>. We strive to <span className="font-semibold">serve all over the Bangladesh</span>. Thank you for visiting our website and learning more about us. If you have any questions or would like to get in touch, please visit our contact page.</p>
        </div>
    </div>
);
}
