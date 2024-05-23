'use client'
import React, { useState } from 'react';
import { Group, Text, Title, useMantineTheme, rem, Input, Tooltip, Textarea } from '@mantine/core';
import { IconUpload, IconPhoto, IconX, IconBrandTwitter, IconAlertCircle } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Image from 'next/image';
import { DateInput } from '@mantine/dates';

const Createvent = () => {
  const theme = useMantineTheme();
  const [imageSrc, setImageSrc] = useState<any>();

  const handleDrop = (files:any) => {
    const file = files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageSrc(fileUrl);
    }
  };

  return (
    <>
   <div className='overflow-hidden mb-10'>
      <Dropzone
      className='mt-10 h-[50vh] w-[90%] ml-[5%]'
        onDrop={handleDrop}
        maxSize={3 * 1024 ** 2}
        accept={['image/jpeg', 'image/png']}
      >
        {imageSrc ? (
          <Image src={imageSrc} alt="Preview" 
          fill
           />
        ) : (
          <Group className='pt-[15%]'justify="center" gap="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
            <Dropzone.Idle>
              <IconPhoto size="3.2rem" stroke={1.5} />
            </Dropzone.Idle>
            <div >
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
              </Text>
            </div>
          </Group>
        )}
      </Dropzone>
      
      <div  className='pl-[5%] w-50% mt-10 mr-[40%]'>
      <Title className='mb-2'  order={1} size='h1'> Title </Title>
      <Input
     
      placeholder="Title of the Event"
      multiline
      required
      size='lg'
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      } />
      </div>
      <div  className='pl-[5%] w-50% mt-10 mr-[40%]'>
      <Title className='mb-2' order={1} size='h1'> Department</Title>
      <Input
      placeholder="department"
      required
      size='lg'
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      } />
      </div>
      <div  className='pl-[5%] w-50% mt-10 mr-[40%]'>
      <Title className='mb-2' order={1} size='h1'> Date and Time</Title>
  
     <DateInput
     valueFormat="DD/MM/YYYY HH:mm:ss"
     placeholder="Date input"
     maw={400}
     size='lg'
   />
      </div>
      <div  className='pl-[5%] w-50% mt-10 mr-[40%]'>
      <Title className='mb-2' order={1} size='h1'> Location</Title>
      <Input
      placeholder="Location"
      required
      size='lg'
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      } />
      </div>
      <div  className='pl-[5%] w-50% mt-10 mr-[40%]'>
      <Title className='mb-2' order={1} size='h1'> About the event</Title>
      <Textarea
      placeholder="what is the event about" 
      size='md'

    />
      </div>
      
      </div>
    </>
  )
}

export default Createvent;
