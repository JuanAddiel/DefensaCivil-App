import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

const InicioSeccion: React.FC = () => {
  
  return (
    <>
      <div className="h-screen w-full">
        <div className="bg-gray-800 h-screen mx-auto max-w-md">
          <div className="p-12">
            <p className="text-5xl pt-10 text-yellow-500 font-bold">
              <br />
              Defensa Civil
            </p>
            <p className="text-xl py-3 text-gray-400 font-semibold">
              Sign in to continue
            </p>
          </div>
          <div className="mx-12 p-3 rounded-xl shadow-sm bg-gray-900">
            <div className="p-3 mx-6 border-b border-gray-500">
              <input
                placeholder="ID"
                name="cedula"
                className="bg-transparent border-0 text-yellow-500 w-full focus:outline-none focus:rang"
                type="text"
              />
            </div>

            <div className="p-3 mx-6 flex border-b border-gray-500">
              <input
                placeholder="Password"
                name="clave"
                className="bg-transparent border-0  text-yellow-500 focus:outline-none focus:rang w-full"
                type="password"
              />
            </div>
          </div>
          <div className="mx-12 p-3 justify-between flex">
            <div className="flex">
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-800 border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"
                ></label>
              </div>
              <label htmlFor="toggle" className="text-xs text-gray-300 mt-1">
                remeber me
              </label>
            </div>
            <div className="bg mt-1 text-xs text-gray-300">
              <a href="">Forget password?</a>
            </div>
          </div>
          <div className="w-full p-12">
            <button className=" bg-yellow-500 p-3 rounded-3xl w-full h-full hover:bg-yellow-600">
              {" "}
              Login
            </button>
            <p className="mx-auto text-center mt-3 text-gray-400">
              Don't have an account?{" "}
              <a href="" className="text-md font-semibold">
                Sign up
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InicioSeccion;
