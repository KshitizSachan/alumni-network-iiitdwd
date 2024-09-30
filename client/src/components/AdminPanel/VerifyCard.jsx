import React, { useState } from 'react'
import { Typography, Stack, Box, Button, Link, Paper } from '@mui/material'
import { Email, LinkedIn } from '@mui/icons-material'
import { fetcherGet } from '../../utils/axiosAPI'
import { alumniEps } from '../../utils/AdminPanel/endpoints'

const VerifyCard = ({ name, email, linkedin, id }) => {
    const [submitting, setSubmitting] = useState(false);

    const handleApprove = async () => {
        setSubmitting(true);
        const url = alumniEps.verification.approve(id);
        const res = await fetcherGet(url);
        // TODO: handle the response
        setSubmitting(false);
    }

    const handleReject = async () => {
        setSubmitting(true);
        const url = alumniEps.verification.approve(id);
        const res = await fetcherGet(url);
        // TODO: handle the response
        setSubmitting(false);
    }

  return (
    <Box component={Paper} sx={{ boxShadow: 2, borderRadius: '0.5rem', padding: '0.625rem 0.875rem' }}>
        <Stack spacing={2}>
            <Typography variant='h5' fontWeight={500}>{name}</Typography>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Email />
                {/* <Typography variant='body1' fontWeight={500}>Email:</Typography> */}
                <Typography variant='body1' fontWeight={400}>{email}</Typography>
            </Stack>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <LinkedIn />
                <Link href={linkedin} underline='hover' color={'inherit'}>{linkedin}</Link>
                {/* <Typography variant='body1' fontWeight={500}>LinkedIn:</Typography> */}
                {/* <Typography variant='body1' fontWeight={400}>LinkedIn profile URL</Typography> */}
            </Stack>
            <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Button variant='contained' color='success' disabled={submitting} onClick={handleApprove}>Approve</Button>
                <Button variant='contained' color='error' disabled={submitting} onClick={handleReject}>Reject</Button>
            </Stack>
        </Stack>
    </Box>
  )
}

export default VerifyCard