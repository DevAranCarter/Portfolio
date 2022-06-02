import { extendTheme } from "@chakra-ui/react";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const theme = extendTheme({
  fonts: {
    heading: `'abel', sans-serif`,
    body: `'raleway', sans-serif`,
  },
});

export default theme;
