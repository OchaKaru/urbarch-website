"use client"
import {useState} from 'react';
import {Heading, Subheading, Subtitle, Title} from './typography';
import Button from './button';
import '../styles/components/metadata.scss';

export default function ProductData({salvage, serial}) {
    const item = salvage.items.find(item => item.serial.toString() === serial);

    const [open, setOpen] = useState(false);
    return (
        <div className='metadata'>
            <div className='general'>
                <div className='title'>
                    <Title>{salvage.name}</Title>
                    {salvage.items.length > 1? <Subtitle>{item.serial}</Subtitle> : ""}
                </div>
                <span className='id'>{salvage.id}{salvage.items.length > 1? `-${serial}` : ""}</span>
                <span className='price'>{item.price === 0? 'Call for pricing' : `$${item.price}.00`}</span>
                <p className='description'>{salvage.description}</p>
                <Button role="primary" style="filled" onPress={() => setOpen(true)}>Salvage Details</Button>
            </div>
            <div className={['modal', open? 'open' : ''].join(" ")}>
                <div className='scrim' onClick={() => setOpen(false)} />
                <div className='overview'>
                    <div className='miscellaneous'>
                        <Heading>Overview</Heading>
                        <div className='history'>
                            <Subheading>History</Subheading>
                            <span>{item.overview.history.location} circa {item.overview.history.year}.</span>
                            <span>{item.overview.history.description}</span>
                        </div>
                        <div className='specifications'>
                            <Subheading>Specifications</Subheading>
                            <span>Height: {item.overview.specifications.height.measurement} {item.overview.specifications.height.unit}</span>
                            <span>Width: {item.overview.specifications.width.measurement} {item.overview.specifications.width.unit}</span>
                            <span>Depth: {item.overview.specifications.depth.measurement} {item.overview.specifications.depth.unit}</span>
                            <span>Weight: {item.overview.specifications.weight.measurement} {item.overview.specifications.weight.unit}</span>
                        </div>
                        <div className='notes'>
                            <Subheading>Notes</Subheading>
                            <span>{item.overview.notes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}