import * as React from 'react';
import Link from 'next/link'
import { Card, CardContent, Typography, Button  } from '@mui/material';

export function CardBox({ link, desc, tags }) {
  return (
    <>
      <Card sx={{ minHeight: 175 }} variant="outlined">
        <Link href={link}>
          <CardContent sx={{ height: 175 }}>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" className="text-gray-600 font-medium	" gutterBottom>
              { desc }
            </Typography>
            {
              tags.length && tags.map((tag) => {
                return (
                  <Button sx={{ marginRight: 1, marginBottom: 1 }} size="small" variant="outlined">{ tag }</Button>
                )
              })
            }
          </CardContent>
        </Link>
      </Card>
    </>
  )
}

export default function Dashboard(props) {
  return (
    <CardBox {...props} />
  )
}
