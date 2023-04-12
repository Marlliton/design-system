import * as Avatar from '@radix-ui/react-avatar';
import {styled} from "../../styles"

export const AvatarContainer = styled(Avatar.Root, {
  overflow: 'hidden',
  height: "$12",
  width: "$12",
  borderRadius: "$full",
  display: "inline-block"
})

export const AvatarImage = styled(Avatar.Image, {
  height: "100%",
  width: "100%",
  borderRadius: "inherit",
  objectFit: "cover"
})

export const AvatarFallback = styled(Avatar.Fallback, {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent:"center", 
  alignItems: "center",
  backgroundColor:"$gray800",
  color: "$gray600",

  svg: {
    height: "$6",
    width: "$6",
  }
})