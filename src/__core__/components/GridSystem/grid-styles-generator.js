import {
  LG_BREAKPOINT,
  MD_BREAKPOINT,
  NUMBER_OF_COLUMNS_GRID,
  PARENT_SIZE,
  SM_BREAKPOINT,
  SPACING_SCALER,
  XL_BREAKPOINT,
  XS_BREAKPOINT,
} from '../../utils/constants';

const isValidSize = (breakPointColumns) =>
  typeof breakPointColumns === 'number' &&
  breakPointColumns > 0 &&
  breakPointColumns <= 12 &&
  breakPointColumns % 1 == 0;

export const getMediaQueries = ({
  xs,
  sm,
  md,
  lg,
  xl,
  colSpacing,
  spacing,
}) => {
  let mediaQueries = '';
  const space = SPACING_SCALER * (colSpacing || spacing || 0);

  const widthOfColumn = `${PARENT_SIZE / NUMBER_OF_COLUMNS_GRID}% - ${
    (NUMBER_OF_COLUMNS_GRID - 1) * (space / NUMBER_OF_COLUMNS_GRID)
  }px`;

  const breakPoints = [
    {
      screenSize: XS_BREAKPOINT,
      columnSize: xs,
    },
    {
      screenSize: SM_BREAKPOINT,
      columnSize: sm,
    },
    {
      screenSize: MD_BREAKPOINT,
      columnSize: md,
    },
    {
      screenSize: LG_BREAKPOINT,
      columnSize: lg,
    },
    {
      screenSize: XL_BREAKPOINT,
      columnSize: lg,
    },
    {
      screenSize: XL_BREAKPOINT,
      columnSize: xl,
    },
  ];

  breakPoints.forEach(({ columnSize, screenSize }) => {
    if (isValidSize(columnSize)) {
      mediaQueries += `@media (min-width: ${screenSize}) {
        flex-basis: calc(${columnSize} * (${widthOfColumn}) + ${
        columnSize - 1
      } * ${space}px);
      }`;
    }
  });

  return mediaQueries;
};
