import { Fragment, useEffect, useState } from "react";
import { FaPaperclip, FaDog, FaStore } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export const data = [
  {
    id: Math.floor(Math.random() * 100),
    url: "https://m.media-amazon.com/images/I/81daeRW6RbL._AC_UF894,1000_QL80_.jpg",
    name: "Caneta Tinteiro Elegante",
    oldprice: 55.56,
    discont: 10,
    participants: 60,
    requests: 90,
    placeper: "Palácio das Canetas",
    price: 50,
    category: "materiaisdeescritorio",
    icon: <FaPaperclip size={30} color="#808080" />,
  },
  {
    id: Math.floor(Math.random() * 100),
    url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/157228001f35416e31d2f85f3984d5fe.jpg",
    name: "Caderno de Couro Premium",
    oldprice: 41.18,
    discont: 15,
    participants: 45,
    requests: 70,
    placeper: "Couro & Papel Co.",
    price: 35.0,
    category: "materiaisdeescritorio",
    icon: <FaPaperclip size={30} color="#808080" />,
  },
  {
    id: Math.floor(Math.random() * 100),
    url: "https://akns-images.eonline.com/eol_images/Entire_Site/2022123/rs_1024x759-220223115136-4CF8BC89-68FA-4F9A-8E42-6742713B82E8.png",
    name: "Conjunto Quirky de Acessórios para Escritório",
    oldprice: 31.25,
    discont: 20,
    placeper: "Delícias do Escritório",
    participants: 30,
    requests: 55,
    price: 25,
    category: "materiaisdeescritorio",
    icon: <FaPaperclip size={30} color="#808080" />,
  },
  {
    id: Math.floor(Math.random() * 100),
    url: "https://artventure.store/cdn/shop/products/H5198a0c115654398b3008e56e6ab9990x-min.jpg",
    name: "Conjunto de Caligrafia Estilo Vintage",
    oldprice: 68.18,
    discont: 12,
    placeper: "Empório de Tinta & Pena",
    participants: 25,
    requests: 40,
    price: 60,
    category: "materiaisdeescritorio",
    icon: <FaPaperclip size={30} color="#808080" />,
  },
  {
    id: Math.floor(Math.random() * 100),
    url: "https://cdn.discordapp.com/attachments/410840558677000192/1180620481276158002/61WJDQPFovL.png",
    name: "Conjunto Criativo de Fitas Washi",
    oldprice: 9.76,
    discont: 18,
    placeper: "Canto Criativo",
    participants: 35,
    requests: 60,
    price: 8,
    category: "materiaisdeescritorio",
    icon: <FaPaperclip size={30} color="#808080" />,
  },

  {
    id: Math.floor(Math.random() * 100),
    url: "https://m.media-amazon.com/images/I/718cxvX5vML.jpg",
    name: "Brinquedo Interativo para Cães",
    oldprice: 16.67,
    discont: 10,
    placeper: "Patas & Diversão",
    participants: 40,
    requests: 60,
    price: 15,
    category: "petshop",
    icon: <FaDog size={30} color="#808080" />,
  },
  {
    id: Math.floor(Math.random() * 100),
    url: "https://m.media-amazon.com/images/I/612tMJNcqnS._AC_UF1000,1000_QL80_.jpg",
    name: "Ração Premium para Gatos",
    oldprice: 29.41,
    discont: 15,
    placeper: "Delícias para Bigodes",
    participants: 35,
    requests: 50,
    price: 25,
    category: "petshop",
    icon: <FaDog size={30} color="#808080" />,
  },

  {
    id: Math.floor(Math.random() * 100),
    url: "https://cdn.thewirecutter.com/wp-content/media/2022/06/dogbeds-2048px-9090.jpg?auto=webp&quality=75&width=1024",
    name: "Cama Confortável para Animais de Estimação",
    oldprice: 37.5,
    discont: 20,
    placeper: "Criaturas Aconchegantes",
    participants: 25,
    requests: 45,
    price: 30,
    category: "petshop",
    icon: <FaDog size={30} color="#808080" />,
  },

  {
    id: Math.floor(Math.random() * 100),
    url: "https://picsum.photos/seed/12/300/300",
    name: "Lorem Ipsum",
    oldprice: 100,
    discont: 10,
    placeper: "Roberto",
    participants: 45,
    requests: 70,
    price: 200,
    category: "mercearia",
    icon: <FaStore size={30} color="#808080" />,
  },
  {
    id: Math.floor(Math.random() * 100),
    url: "https://picsum.photos/seed/15/300/300",
    name: "Lorem Ipsum",
    oldprice: 100,
    discont: 10,
    placeper: "Roberto",
    participants: 45,
    requests: 70,
    price: 200,
    category: "mercearia",
    icon: <FaStore size={30} color="#808080" />,
  },
  {
    id: Math.floor(Math.random() * 100),
    url: "https://picsum.photos/seed/11/300/300",
    name: "Lorem Ipsum",
    oldprice: 100,
    discont: 10,
    placeper: "Roberto",
    participants: 45,
    requests: 70,
    price: 200,
    category: "mercearia",
    icon: <FaStore size={30} color="#808080" />,
  },
];

export const ListItem = () => {
  const [query, setQuery] = useState("materiaisdeescritorio");

  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  const [currentUrl, setCurrentUrl] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [currentPlece, setCurrentPlece] = useState("");
  const [currentdiscont, setCurrentdiscont] = useState(0);
  const [currentoldprice, setCurrentoldprice] = useState(0);
  const [currentprice, setCurrentprice] = useState(0);
  const [currentparticipants, setCurrentparticipants] = useState(0);
  const [currentrequests, setCurrentrequests] = useState(0);

  const onOpenModal = (
    url: string,
    text: string,
    place: string,
    discont: number,
    oldprice: number,
    price: number,
    participants: number,
    requests: number
  ) => {
    setOpen(true);
    setCurrentUrl(url);
    setCurrentText(text);
    setCurrentPlece(place);
    setCurrentdiscont(discont);
    setCurrentoldprice(oldprice);
    setCurrentparticipants(participants);
    setCurrentrequests(requests);
    setCurrentprice(price);
  };

  return (
    <div className="w-screen grid grid-row-3 mt-10">
      <div className="flex flex-col items-center justify-center gap-9">
        <h1 className="text-lg text-[#131416] font-semibold">
          O que você deseja comprar hoje?
        </h1>
        <div className="flex bg-white w-full border max-w-2xl h-12 rounded-full mb-2 items-center pr-4">
          <input
            type="text"
            placeholder={query}
            className="w-full text-center h-full outline-none"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <SlMagnifier size={30} />
        </div>

        <div className="flex gap-5 my-10">
          <button
            className="px-5 py-1 bg-slate-400 rounded-full"
            onClick={() => setQuery("materiaisdeescritorio")}
          >
            Materiais de Escritorio
          </button>
          <button
            className="px-5 py-1 bg-slate-400 rounded-full"
            onClick={() => setQuery("mercearia")}
          >
            Mercearia
          </button>
          <button
            className="px-5 py-1 bg-slate-400 rounded-full"
            onClick={() => setQuery("petshop")}
          >
            PetShop
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 justify-center justify-items-center">
        {query.length == 0
          ? data.map((data) => {
              return (
                <div
                  key={data.id}
                  className="shadow-lg border border-[#d6d6d6] flex flex-col gap-3 justify-center w-full"
                >
                  <div className="flex">
                    <img
                      src={data.url}
                      width={300}
                      height={10}
                      className="mx-auto"
                    />
                    <span className="absolute mt-1 ml-1">{data.icon}</span>
                  </div>
                  <h2 className="mx-auto">{data.name}</h2>
                  <div className="grid grid-rows-2 items-start mx-6">
                    <h3 className="line-through text-sm text-slate-700">
                      R$ {data.oldprice}
                    </h3>
                    <h1>R$ {data.price}</h1>
                  </div>
                  <button
                    className="m-4 p-2 bg-blue-600 rounded-2xl text-white"
                    onClick={() =>
                      onOpenModal(
                        data.url,
                        data.name,
                        data.placeper,
                        data.discont,
                        data.oldprice,
                        data.participants,
                        data.requests,
                        data.price
                      )
                    }
                  >
                    Ver Grupo
                  </button>
                </div>
              );
            })
          : data
              .filter((data) => data.category.toLowerCase().includes(query))
              .map((data) => {
                return (
                  <div
                    key={data.id}
                    className="shadow-lg border border-[#d6d6d6] flex flex-col gap-3 justify-center w-full"
                  >
                    <div className="flex">
                      <img
                        src={data.url}
                        width={300}
                        height={10}
                        className="mx-auto"
                      />
                      <span className="absolute mt-1 ml-1">{data.icon}</span>
                    </div>
                    <h2 className="mx-auto">{data.name}</h2>
                    <div className="grid grid-rows-2 items-start mx-6">
                      <h3 className="line-through text-sm text-slate-700">
                        R$ {data.oldprice}
                      </h3>
                      <h1>R$ {data.price}</h1>
                    </div>
                    <button
                      className="m-4 p-2 bg-blue-600 rounded-2xl text-white"
                      onClick={() =>
                        onOpenModal(
                          data.url,
                          data.name,
                          data.placeper,
                          data.discont,
                          data.oldprice,
                          data.participants,
                          data.requests,
                          data.price
                        )
                      }
                    >
                      Ver Grupo
                    </button>
                  </div>
                );
              })}
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        className="w-full max-w-xl rounded-full"
      >
        <div className="flex flex-col gap-3 justify-start items-center rounded-full">
          <img src={currentUrl} width={300} height={50} className="my-10" />
          <h1 className="font-bold text-xl">{currentText}</h1>
          <h2 className="font-extrabold text-[#6F6F6F]">
            Representante {currentPlece}
          </h2>
          <tr>
            <td className="pr-10">Valor Atual</td>
            <td>R$ {currentoldprice}</td>
          </tr>
          <hr />
          <tr>
            <td className="pr-10">Desconto Aplicado</td>
            <td>{currentdiscont}</td>
          </tr>
          <hr />
          <tr>
            <td className="pr-10">n° de Participantes</td>
            <td>{currentparticipants}</td>
          </tr>
          <hr />
          <tr>
            <td className="pr-10">n° de Pedidos</td>
            <td>{currentrequests}</td>
          </tr>
          <hr />
          <tr>
            <td className="pr-10">Valor sem Desconto</td>
            <td>R$ {currentprice}</td>
          </tr>
        </div>
      </Modal>
    </div>
  );
};
