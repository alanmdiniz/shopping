import DeleteIcon from "@mui/icons-material/Delete";
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

const CheckoutItem = ({ item, handleRemoveCart, ...props }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleRemoveCart(item.product.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar src={require(`../assets/img/${item.product.id}.jpg`)} />
      </ListItemAvatar>
      <ListItemText
        primary={`${item.product.title} (Quantity: ${item.quantity})`}
        secondary={item.product.description}
      />
    </ListItem>
  );
};

export default CheckoutItem;
