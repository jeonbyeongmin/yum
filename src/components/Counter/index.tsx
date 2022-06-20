import {HStack, IconButton, Text} from '@chakra-ui/react';
import {MinusIcon, PlusOutLineIcon} from 'components/Icon';
import {useState} from 'react';
interface ICounter {
  cnt: number;
  handleClick: (operation: string) => void;
}
function Counter({cnt, handleClick}: ICounter) {
  // const [number, setNumber] = useState(cnt);

  // const onMinusClick = () => {
  //   if (number > 0) {
  //     setNumber(prev => prev - 1);
  //   }
  // };

  // const onPlusClick = () => {
  //   setNumber(prev => prev + 1);
  // };

  return (
    <HStack border={'1px solid #cd6969'} borderRadius={7}>
      <IconButton
        aria-label="minus-icon"
        icon={<MinusIcon size={13} />}
        variant="ghost"
        _focus={{border: 'none'}}
        onClick={() => handleClick('minus')}
      />
      <Text fontSize="xl" color="#000000">
        {cnt}
      </Text>
      <IconButton
        onClick={() => handleClick('plus')}
        aria-label="plus-icon"
        icon={<PlusOutLineIcon size={13} />}
        variant="ghost"
        _focus={{border: 'none'}}
      />
    </HStack>
  );
}

export default Counter;
