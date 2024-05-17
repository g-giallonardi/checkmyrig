import mockImg from '../../assets/images/basher-04.png'

function Rig() {
    const parts = [
        {brand:'Injora',name: '11KG Coreless High Torque Micro Servo', type:'electronic'},
        {brand:'Injora',name: 'IR40 Half Truck Hard Plastic Body with Cage', type:'body'},
        {brand:'Injora',name: 'LCG Carbon Fiber Chassis Kit 5° Angled Frame Girder', type:'Chassis'},
        {brand:'Injora',name: 'King Trekker 1.0" A/T Tires', type:'Tires & wheels'},
        {brand:'Injora',name: '1.0" 39g/pcs Brass Beadlock Wheels Negative Offset 2.65mm 1.0" 39g/pcs Brass Beadlock Wheels Negative Offset 2.65mm 1.0" 39g/pcs Brass Beadlock Wheels Negative Offset 2.65mm', type:'tires & wheels'}
    ]
    return (
        <div className='flex flex-col mx-auto justify-items-center w-full  '>
            <div className='flex lg:flex-row flex-col basis-2/3 h-24 my-5 gap-2 rounded-md'>
                <img src={mockImg} alt=""/>
                <div className='flex flex-col bg-muted border w-full border-accent rounded-sm p-5'>
                    <div className='flex text-lg font-bold '>Viper</div>
                    <div className='flex text-sm font-light '>KayZerr893's rig</div>
                    <div className='text-justify mt-3'>
                        <div className='flex flex-row gap-2 mb-5'>
                            <div className='flex flex-col font-bold'>
                                <span>Brand:</span>
                                <span>Model:</span>
                                <span>Scale:</span>
                                <span>Type:</span>
                                <span>Energy:</span>
                            </div>
                            <div className='flex flex-col font-light'>
                                <span>Traxxxas</span>
                                <span>TRX4M</span>
                                <span>1/18</span>
                                <span>crawler</span>
                                <span>electric</span>
                            </div>
                        </div>
                        <div className='overflow-scroll'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur blanditiis eligendi eum non
                quae veniam! Beatae consectetur consequuntur ea eveniet, excepturi fugit iure libero, placeat
                reprehenderit tenetur ut, veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aperiam autem corporis debitis dolore eveniet expedita facilis ipsam laboriosam laudantium molestias obcaecati odit optio placeat, praesentium quod veritatis, voluptas! </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full bg-muted border border-accent rounded-md text-sm p-2 '>
                <table>
                    <thead>
                    <tr className='text-left text'>
                        <th>Brand</th>
                        <th>Part</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {parts.map(
                        (part, idx) => {
                            return (
                                <tr key={idx} className='border-b border-accent border-b-border align-top'>
                                    <td>{part.brand}</td>
                                    <td>{part.name}</td>
                                    <td>{part.type}</td>
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Rig