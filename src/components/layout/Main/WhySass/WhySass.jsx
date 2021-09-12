import React, { useState } from 'react';
import Heading from '../../../Typography/Heading';
import Paragraph from '../../../Typography/Paragraph';
import FunctionsDemo from './FunctionsDemo';
import MixinsDemo from './MixinsDemo';
import NestingDemo from './NestingDemo';
import VariablesDemo from './VariablesDemo';

export default function WhySass() {
    const [demo, setDemo] = useState(1);

    const getDemo = () => {
        switch (demo) {
            case 2:
                return <FunctionsDemo />;
            case 3:
                return <MixinsDemo />;
            case 4:
                return <NestingDemo />;
            default:
                return <VariablesDemo />;
        }
    }

    return (
        <section className="why-sass mt-lg" >
            <div className="why-sass__container">
                <img src="../img/paul-pensando.png" alt="Paul angustiado" className="why-sass__img" />
                <div className="why-sass__info">
                    <Heading type="secondary" className="text-align-center">Pero escribir tanto código CSS puede llegar a ser tedioso.</Heading>
                    <Paragraph>
                        Tomando como ejemplo el card de arriba, el código de se ve así:
                    </Paragraph>
                    <img src="../img/code.png" alt="Component" className="why-sass__photo" />
                    <Paragraph>  Tenemos muchas classes que puede ser tedioso y revoltoso escribir. Aquí es donde juega un papel importante SCSS.
                    </Paragraph>
                </div>
            </div>
            <Heading className="text-align-center mt-md mb-sm">SCSS hace escribir CSS mucho mas sencillo</Heading>
            <div className="why-sass__features">
                <button onClick={() => setDemo(1)} className="why-sass__btn">
                    <Heading type="3" className={`why-sass__feature ${demo === 1 && 'why-sass__feature--active'}`}>Variables</Heading>
                </button>
                <button onClick={() => setDemo(2)} className="why-sass__btn">
                    <Heading type="3" className={`why-sass__feature ${demo === 2 && 'why-sass__feature--active'}`}>Funciones</Heading>
                </button>
                <button onClick={() => setDemo(3)} className="why-sass__btn">
                    <Heading type="3" className={`why-sass__feature ${demo === 3 && 'why-sass__feature--active'}`}>Mixins</Heading>
                </button>
                <button onClick={() => setDemo(4)} className="why-sass__btn">
                    <Heading type="3" className={`why-sass__feature ${demo === 4 && 'why-sass__feature--active'}`}>Estilos anidados</Heading>
                </button>
            </div>
            <div className="why-sass__features-demos">
                {getDemo()}
            </div>
        </section>
    )
}
