#![allow(dead_code)]
use crate::enums::*;

#[derive(WithNumberValue, Debug, Copy, Clone, PartialEq)]
pub enum LookType {
    #[value = 0]
    Job,
    Hair,
    Weapon,
    HeadBottom,
    HeadTop,
    HeadMid,
    HairColor,
    ClothesColor,
    Shield,
    Shoes,
    Robe,
    Body,
}
