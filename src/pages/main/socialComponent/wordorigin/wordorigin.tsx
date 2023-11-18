import React from "react";
import { Box } from "@mui/material";
import {Common} from './common'
import {dummy1,dummy2,dummy3} from '../../../../data/dummy'
import { Typography, Divider } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export const WordOrigin = () => {
    const theme = useTheme();   
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
      <Box sx={{ textAlign: 'right', marginTop: isLargeScreen ? '0px' : '20px' }}>
        <Box className="first-section-orign-words" sx={{ paddingX: "10px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            أصل الكلمة في المعجم
          </Typography>
        </Box>
        <Box
          sx={{ backgroundColor: "white", paddingX: "20px", paddingY: "10px" }}
        >
          <Box
            className="second-section"
            sx={{
              width: "95%",
              marginTop: "20px",
              marginBottom: "10px",
              paddingX: "10px"
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "20px" }}
              >
                مطر
              </Typography>{" "}
            </Box>
            <Divider sx={{}} />

            <Box>
              <Typography sx={{ marginTop: "10px" }}>
                المَطَرُ: الماء المنكسب من السَّحابِ والمَطرُ: ماءُ السحابِ
                والجمع أَمْطارٌ وَمَطَرٌ : اسم رجل، سمي به من حيث سمي غَيْثاً ؛
                والناس يقولون: مَطَرتِ السماء وأَمْطرتْ بمعنى هطل الغيث{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Common text={dummy2.text} desc={dummy2.desc} subtitle1={dummy2.subtitle1} subtitle2={dummy2.subtitle2}/>
        <Common text={dummy1.text} desc={dummy1.desc} subtitle1={dummy1.subtitle1} subtitle2={dummy1.subtitle2}/>
        <Common text={dummy3.text} desc={dummy3.desc} subtitle1={dummy3.subtitle1} subtitle2={dummy3.subtitle2}/>  
      </Box>
    </div>
  );
};
