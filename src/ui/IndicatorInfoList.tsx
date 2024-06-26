import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Color } from '../core/theme/color';

type InfoItem = {
  title: string;
  subtitle: string;
  list: string[];
};


export const IndicatorInfoList: FC<InfoItem> = ({ title, subtitle, list }) => {
  const renderList = (items: string[], increment = 0): ReactNode => (
    <>
      {items.map((item, index) => (
        <Box sx={{ display: 'flex', mb: 1 }} key={index}>
          <Box style={{ color: Color.magenta }}>{index + increment + 1}.&nbsp;</Box>
          <Box style={{ color: Color.black }}>{item}</Box>
        </Box>
      ))}
    </>
  );

  const getColumns = (list: string[]): ReactNode[] => {
    if (list.length > 6) {
      const third = Math.ceil(list.length / 3);
      return [
        renderList(list.slice(0, third)),
        renderList(list.slice(third, 2 * third), third),
        renderList(list.slice(2 * third), 2 * third),
      ];
    } else {
      const half = Math.ceil(list.length / 2);
      return [renderList(list.slice(0, half)), renderList(list.slice(half), half)];
    }
  };

  const columns = getColumns(list);

  return (
    <Box>
      <Typography variant="h2" sx={{ color: Color.black, mb: 2 }}>
        {title}
      </Typography>
      <Typography sx={{ color: Color.black }}>
        {subtitle}
      </Typography>
      <Box sx={{ display: 'flex', mt: 0 }}>
        {columns.map((column, index) => (
          <Box sx={{ mr: index < columns.length - 1 ? 2 : 0 }} key={index}>
            {column}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
