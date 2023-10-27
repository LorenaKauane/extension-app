import { useEffect, useState } from 'react';
import './App.css';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import Checkbox from './components/Checkbox';
import Toggle from './components/Toggle';
import Button from './components/Button';

function App() {
  const [typeOperation, setTypeOperation] = useState('cpf');
  const [isFormat, setIsFormat] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const operations = {
    cpf: {
      generate: cpf.generate,
      format: cpf.format,
    },
    cnpj: {
      generate: cnpj.generate,
      format: cnpj.format,
    },
  };

  useEffect(() => {
    setInputValue(operations[typeOperation].generate(isFormat));
  }, [typeOperation]);

  function generateDocument() {
    const value = operations[typeOperation].generate(isFormat);
    setInputValue(value);
  }

  async function showAlert() {
    setIsAlert(true);
    await navigator.clipboard.writeText(inputValue);
    setTimeout(() => setIsAlert(false), 2500);
  }

  return (
    <>
      <div className="flex justify-center">
        <div>
          <p className=" text-3xl font-bold my-3">
            Gerador de documento brasileiro
          </p>
          <p>Selecione o tipo o documento</p>
          <div className="flex mb-4">
            <Checkbox
              label="CPF"
              onChange={() => setTypeOperation('cpf')}
              checked={typeOperation == 'cpf'}
            />
          </div>
          <div className="flex items-center ">
            <Checkbox
              label="CNPJ"
              onChange={() => setTypeOperation('cnpj')}
              checked={typeOperation === 'cnpj'}
            />
          </div>
          <div className="flex  items-center justify-between ">
            <Toggle
              label="Formatado?"
              checked={isFormat}
              onChange={(e) => {
                setInputValue(
                  !isFormat
                    ? operations[typeOperation].format(inputValue)
                    : inputValue.replace(/\D/g, '')
                );
                setIsFormat(!isFormat);
              }}
            />
            <Button text="Gerar" onClick={() => generateDocument()} />
          </div>
          <div className="relative my-3">
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 my-3"
              placeholder="Search"
              value={inputValue}
              required
              disabled
            />
            {isAlert && (
              <div
                class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 mt-3"
                role="alert"
              >
                <span class="font-medium">Copiado com sucesso 😊 </span>
              </div>
            )}
            <Button text="Copiar" onClick={() => showAlert()} />
          </div>
        </div>
      </div>
      <div className="flex mt-3 text-sm text-gray-400">
        <a href="https://lorenaporphirio.com/" target="_blank">
          Feito por: Lorena Porphirio ✨
        </a>
      </div>
    </>
  );
}

export default App;
